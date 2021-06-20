import Button from "@material-ui/core/Button";

function Food({name, picture}) {
  console.log(name);
  return (
    <div>
      <h2>i love movie {name}</h2>
      <img src={picture} alt={name}/>
    </div>
  )
}
const foodIlike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://www.davidlebovitz.com/wp-content/uploads/2008/03/kimchi-recipe-7.jpg",
  },
  {
    id: 2,
    name: "ramen",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAyMDA1MjZfMjcw/MDAxNTkwNDgxNTI0OTI5.cElkTRG2bnYaUn0RlCq58_227T8KT_g2H1riUFYdYmYg.ZxnDFMZfaOq-jt4Qa5lk2gz3kr1Z-OG7HTVRiLYGEsAg.JPEG.naverschool/GettyImages-647266676.jpg?type=w800",
  },
];

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button variant="contained" color="primary">
        Hello
      </Button>

      {foodIlike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
