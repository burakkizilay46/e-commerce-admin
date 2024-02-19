interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return <p className="text-2xl font-medium">{title}</p>;
};

export default PageTitle;
