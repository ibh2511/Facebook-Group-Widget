import React, { useState, useEffect } from "react"
import axios from "axios"
import IconBxlFacebook from "./IconBxlFacebook"

// TODO
// Lifetime accesstoken

const accessToken = import.meta.env.VITE_FBOOK_ACCESS_TOKEN

export default function FacebookGroup(props) {
  const { groupTitle, memberText, btnText, width } = props
  const [group, setGroup] = useState(null)

  const groupUrl = "https://www.facebook.com/groups/" + props.groupID
  const compWidth = width ? width : "280px"

  useEffect(() => {
    const getGroup = async () => {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${props.groupID}?fields=name,cover,member_count&access_token=${accessToken}`
      )
      setGroup(response.data)
    }

    getGroup()
  }, [props.groupID])

  return (
    <div>
      {group && (
        <>
          <div
            className={`font-monospace bg-secondary m-10 p-3 w-[${compWidth}] h-[140px] rounded-[30px]`}
          >
            <h2 className="flex justify-center font-bold text-primary pl-2 text-[21px] uppercase tracking-[.15em]">
              {groupTitle ? groupTitle : group.name}
            </h2>
            <div className="flex justify-center">
              <div className="flex flex-col ml-2 mr-3">
                <img
                  className="rounded-full w-[75px] h-[75px] border-primary border-[1px]"
                  src={group.cover.source}
                />
              </div>

              <div>
                {group.member_count ? (
                  <p className="mt-2 text-primary text-[14px] text-center">
                    {group.member_count} {memberText ? memberText : "Members"}
                  </p>
                ) : (
                  <br />
                )}
                <a href={groupUrl} target="_blank" rel="noopener noreferrer">
                  <button className="mt-2 flex items-center px-4 h-8 rounded-[30px] bg-primary hover:bg-secondary text-secondary border-primary border-[1px]	hover:text-[#31363B]">
                    <IconBxlFacebook />
                    <span className="mt-1 ml-2">
                      {btnText ? btnText : "Join Group"}
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
