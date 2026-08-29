import type { Component, ComponentProps } from "solid-js"
import { mergeProps } from "solid-js"

const icons = import.meta.glob<{ default: Component<ComponentProps<"svg">> }>(
  "../assets/icons/*.svg",
  { eager: true }
)

type IconProps = {
  icon: string,
  size?: number,
  class?: string,
}

function Icon(props: IconProps) {
  const propsInner = mergeProps({ size: 24 }, props)

  const SvgComponent = icons[`../assets/icons/${propsInner.icon}.svg`]?.default
  if (!SvgComponent) return null

  return (
    <SvgComponent
      width={propsInner.size}
      height={propsInner.size}
      class={propsInner.class ? `icon ${propsInner.class}` : "icon"}
    />
  )
}

export default Icon
