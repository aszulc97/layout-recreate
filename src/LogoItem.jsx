export default function LogoItem({ companyname, icon }) {
  return (
    <div className="logo">
      {icon}
      <p>{companyname}</p>
    </div>
  );
}
