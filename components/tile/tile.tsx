import { Box } from "@radix-ui/themes";

export function Tile(props: any) {
  return (
    <Box width="9" height="9">
      <div className={`w-4 h-4 bg-${props.color}-500`} >
      </div>
    </Box>
  )
}
