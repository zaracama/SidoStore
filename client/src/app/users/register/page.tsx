import { addUser } from "@/actions/user";
export const dynamic = "force-dynamic";

export default function Register() {
  return (
    <div className="flex flex-col justify-center items-center my-10 py-10 font-assistant">
      <div className="w-1/4">
        <div className="text-center text-3xl font-bold">Registration</div>
        <div>
          <form action={addUser} className="flex flex-col">
            <div className="flex flex-col gap-2 my-3 ">
              <label className="text-sm font-semibold" htmlFor="name">
                Name
              </label>
              <input
                className="border border-gray-300 h-9 placeholder-opacity-50 pl-[14px] text-xs  focus:text-sm "
                type="text"
                name="name"
                placeholder="Please enter the name"
              />
            </div>
            <div className="flex flex-col gap-2 my-3 ">
              <label className="text-sm font-semibold" htmlFor="username">
                Username
              </label>
              <input
                className="border border-gray-300 h-9 placeholder-opacity-50 pl-[14px] text-xs  focus:text-sm "
                type="text"
                name="username"
                placeholder="Please enter the username"
              />
            </div>
            <div className="flex flex-col gap-2 my-3 ">
              <label className="text-sm font-semibold" htmlFor="password">
                Password
              </label>
              <input
                className="border border-gray-300 h-9 placeholder-opacity-50 pl-[14px] text-xs  focus:text-sm "
                type="password"
                name="password"
                placeholder="Please enter the password"
              />
            </div>
            <div className="flex flex-col gap-2 my-3 ">
              <label className="text-sm font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-300 h-9 placeholder-opacity-50 pl-[14px] text-xs  focus:text-sm "
                type="text"
                name="email"
                placeholder="Please enter the email"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 my-3 bg-gray-950 h-9">
              <button className="text-zinc-50 text-balance">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
