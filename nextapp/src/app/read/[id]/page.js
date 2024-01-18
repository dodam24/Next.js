export default async function Read(props) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${props.params.id}`, {  // id값을 URL에 반영해서 데이터를 가져온다.
    cache: "no-store",
  });
  const topic = await res.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
