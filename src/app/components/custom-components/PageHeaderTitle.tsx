interface PageHeaderTitleProps {
  title?: string;
}

export function PageHeaderTitle({ title }: PageHeaderTitleProps) {
  return (
    <section>
      <div className="border-l-4 border-green-500 pl-2 mb-2 font-bold text-sm">
        {title}
      </div>
      <hr />
    </section>
  );
}
