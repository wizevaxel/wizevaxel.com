declare module "*.svg" {
  import type { Component, ComponentProps } from "solid-js"
  const content: Component<ComponentProps<"svg">>
  export default content
}
