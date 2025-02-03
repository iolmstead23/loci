import ChatbotInput from "@/components/chatbot/ChatbotInput";

export default function Dashboard() {
  return (
    <div className="w-screen h-screen bg-slate-600">
      <div className="flex flex-row justify-evenly w-full h-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-center align-middle min-h-10 pt-2">
            <span className="text-xl font-bold my-auto">Chatbot</span>
          </div>

          <div className="mx-5 my-2 rounded-lg bg-slate-100 h-full items-center justify-center text-black">
            Textbox
          </div>

          <div className="m-5">
            <ChatbotInput />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-center align-middle min-h-10 pt-2">
            <span className="text-xl font-bold my-auto">Editor</span>
          </div>

          <div className="mx-5 mt-2 mb-5 rounded-lg bg-slate-100 h-full items-center justify-center text-black">
            Textbox
          </div>
        </div>
      </div>
    </div>
  );
}
