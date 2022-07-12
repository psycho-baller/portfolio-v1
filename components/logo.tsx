import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-6">
      <h1 className="poppins whitespace-nowrap">
        <span className="logo-name inline-block">Rami Maalo</span>
        <img className="u inline-block" src="/logo/u.svg" alt="u"></img>
        <span className="logo-name inline-block" >f</span>
      </h1>
    </div>
  );
}