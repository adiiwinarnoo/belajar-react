function Introduction(props) {
    console.log('parameter kiriman :', props)
  return (
    <div>
        <h1>Silahkan</h1>
        <p>Bersenang-senang </p>
        <p>Name : {props.name}</p>
    </div>
  );
}

export default Introduction;