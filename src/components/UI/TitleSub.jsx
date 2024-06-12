function TitleSub({title, text}) {
  return (
    <>
      <h4 className="font-medium text-red-300 mb-4">{text}</h4>
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
    </>
  );
}

export default TitleSub;
