type Props = {
  title: string;
  subtitle?: string;
};

const Banner = ({ title, subtitle }: Props) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      {subtitle && <p className="banner__subtitle">{subtitle}</p>}
    </div>
  );
};

export default Banner;