import Image from "next/image";
import avatar from "../../assets/images/avatar-jessica.jpeg";
export default function Home() {
const text = String.raw`"Front-End developer and avid reader."`

  return (
    <div className="card flex flex-col text-center items-center h-3/4 xl:h-4/6 rounded-2xl xl:rounded-lg  w-96">
      {/* image */}
      <div className=" flex items-center h-44">
        <Image
          src={avatar}
          alt="avatarImage"
          width={20}
          height={10}
          className="inline-block h-20 w-20 rounded-full"
        />
      </div>
      {/* title */}
      <div className="h-16 w-full">
        <h1 className="h1">Neriya Malachi</h1>
        <p className="TextParagraf">Emanuel, Israel</p>
      </div>
      {/* profeshenal */}
      <div>
        <p className="profeshenal">{text}</p>
      </div>
      {/* links */}
      <div className="flex flex-col mt-4  h-2/4 xl:h-full   p-2 space-y-4">
        <button className="button">GitHub</button>
        <button className="button">Frontend Mentor</button>
        <button className="button">Linkedin</button>
        <button className="button">Twitter</button>
        <button className="button">Instagram</button>
      </div>
    </div>
  );
}
