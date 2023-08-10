type BananaBing = {
  text?: string;
}

export function Button(props: BananaBing) {
  return (
    <button>{props.text} </button>
  )
}
