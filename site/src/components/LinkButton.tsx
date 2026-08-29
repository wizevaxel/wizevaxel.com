import Icon from "./Icon"

type LinkButtonProps = {
  href: string,
  text: string,
  icon?: string,
  class?: string,
}

function LinkButton(props: LinkButtonProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      class={props.class ? `button link-button ${props.class}` : "button link-button"}
    >
      {props.icon && <Icon icon={props.icon}/>}
      <span>{props.text}</span>
    </a>
  )
}

export default LinkButton
