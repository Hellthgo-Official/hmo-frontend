import Logo from '../assets/images/logo-green.png';

const Footer = () => {
  return (
    <div className="px-5 py-8 flex items-center justify-center gap-y-2 flex-col">
      <img src={Logo} className="w-8 h-8" alt="Logo" />
      <p className="text-sm">HealthGO Health Technology Limited</p>
    </div>
  );
};

export default Footer;

