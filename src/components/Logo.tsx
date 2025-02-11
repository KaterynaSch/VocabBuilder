export const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" className="size-9 md:size-10" />
      <p className="font-semibold text-lg/[24px] md:text-[22px]/[32px] ">VocabBuilder</p>
    </div>
  );
};
