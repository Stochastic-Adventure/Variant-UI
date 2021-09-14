import { makeStyles } from "@material-ui/core/styles";
import * as React from "react"

// className={classes.root}
function VariantLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 165.28 165.28"
      {...props}
    >
      <path fill="#fff" d="M-143.576-10.838h105.699v65.326h-105.7z" />
      <path
        d="M.62.62h164.04v164.04H.62z"
        stroke="#000"
        strokeWidth={1.2382343999999998}
      />
      <path
        d="M92.718 73.522l-8.506 19.52h-3.57l-8.532-19.52h3.932l6.497 15.059 6.554-15.059z"
        aria-label="V"
        fontWeight={600}
        fontSize={33.333}
        fontFamily="Montserrat"
        fill="#fff"
      />
    </svg>
  )
}


// const StyledButton = withStyles({
//   root: {
//       fill: '#000',
//       '&:hover': {
//           fill: 'linear-gradient()'
//       }
//   }
// })(VariantLogo);


export default VariantLogo