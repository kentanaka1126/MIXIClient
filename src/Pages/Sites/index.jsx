import React from "react";
import Site from "../../Components/Site";

function Sites() {
  return (
    <div className="w-screen h-screen bg-gray-300 p-4">
      <div className="bg-white rounded-2xl py-6 px-40 shadow-lg w-full h-full flex justify-center items-center overflow-y-auto">
        <div className="flex flex-col">
          <div className="flex w-full mb-6">
            <h1 className="text-4xl font-bold">Productivity</h1>
            <div class="relative flex ml-auto bg-gray-300 rounded-3xl text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-none hover:border-slate-300 shadow-sm focus:shadow-none"
                placeholder="Search apps..."
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <Site title="Notion" image="Notion"/>
            <Site title="Twitter/X" image="Twitter"/>
            <Site title="Instagram" image="Instagram"/>
            <Site title="LinkedIn" image="LinkedIn"/>
            <Site title="Gmail app" image="GmailApp"/>
            <Site title="Google drive" image="GoogleDrive"/>
            <Site title="Calendly" image="Calendly"/>
            <Site title="TikTok" image="TikTok"/>
            <Site title="Google docs" image="GoogleDoc"/>
            <Site title="Google sheets" image="GoogleSheets"/>
            <Site title="Microsoft teams" image="MicrosoftTeams"/>
            <Site title="Microsoft word" image="MicrosoftWord"/>
            <Site title="Outlook" image="Outlook"/>
            <Site title="Slack" image="Slack"/>
            <Site title="Cal.com" image="Cal"/>
            <Site title="Google meet" image="GoogleMeet"/>
            <Site title="Stripe" image="Stripe"/>
            <Site title="Whatsapp" image="Whatsapp"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sites;
