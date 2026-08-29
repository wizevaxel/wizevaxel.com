import type { JSX } from "solid-js"

type CardProps = {
  title?: string,
  class?: string,
  children: JSX.Element,
}

function Card(props: CardProps) {
  return (
    <div class={props.class ? `card ${props.class}` : "card"}>
      {props.title && <h2 class="card-title">{props.title}</h2>}
      <div class="card-body">{props.children}</div>
    </div>
  )
}

export default Card
