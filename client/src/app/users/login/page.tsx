import { login } from "@/actions/user";
export const dynamic = "force-dynamic";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center my-10 py-10 font-assistant">
      <div className="w-1/4">
        <div className="text-center text-3xl font-bold">Login</div>
        <div>
          <form action={login} className="flex flex-col">
            <div className="flex flex-col gap-2 my-3 ">
              <label className="text-sm font-semibold" htmlFor="emailLabelId">
                Email
              </label>
              <input
                id="emailLabelId"
                className="border border-gray-300 h-9 placeholder-opacity-50 pl-[14px] text-xs  focus:text-sm "
                type="text"
                name="email"
                placeholder="Please enter the email"
              />
            </div>

            <div className="flex flex-col gap-2 my-3 ">
              <label
                className="text-sm font-semibold"
                htmlFor="passwordLabelId"
              >
                Password
              </label>
              <input
                id="passwordLabelId"
                className="border border-gray-300 h-9 placeholder-opacity-50 pl-[14px] text-xs  focus:text-sm "
                type="password"
                name="password"
                placeholder="Please enter the password"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 my-3 bg-gray-950 h-9">
              <button className="text-zinc-50 text-balance">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
