const apiUrl = "https://jsonplaceholder.typicode.com/users/";

export async function getStaticPaths() {
  const res = await fetch(apiUrl);
  const data = await res.json();
  // console.log("1", data);
  // 這裡的 console.log 會出現在 VSCode 的終端機，不是瀏覽器耶

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
    // false: 進入沒有的 ID 就會變成 404
    // true: 出現 react 錯誤訊息畫面
  };
}

//context ??
// context 名字沒規定，只看位置
export async function getStaticProps({ params }) {
  const { id } = params;
  // console.log("a", id);
  const url = apiUrl + id;
  const res = await fetch(url);
  const data = await res.json();
  // console.log("U", url);
  // 剛剛有個白癡狀況是 url 最後結尾沒有 /

  return {
    props: { banana: data },
  };
}

export default function StoreSinglePage({ banana }) {
  // console.log(banana);
  return (
    <div>
      <h1>StoreSinglePage</h1>
      <p>{banana.username}</p>
      <p>{banana.email}</p>
    </div>
  );
}
