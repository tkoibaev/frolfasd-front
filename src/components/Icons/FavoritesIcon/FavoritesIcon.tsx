import * as React from "react"
import { IconProps } from "../Icon"
import styles from "./FavoritesIcon.module.scss"
import clsx from "clsx"

const FavoritesIcon: React.FC<IconProps> = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={clsx(styles.icon, className)}
      enable-background="new 0 0 48 48"
      version="1.1"
      viewBox="0 0 48 48"
      x="0px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      y="0px"
    >
      <g id="Expanded">
        <g>
          <path
            fill="red"
            stroke="red"
            d="M24,47.001c-0.173,0-0.346-0.045-0.501-0.135c-0.239-0.138-5.913-3.447-11.678-8.778C3.977,30.835,0,23.668,0,16.787    c0-9.275,6.279-13.5,12.113-13.5c4.499,0,9.53,2.572,11.887,8.229c2.357-5.657,7.389-8.229,11.887-8.229    C41.721,3.287,48,7.512,48,16.787c0,6.881-3.977,14.048-11.821,21.301c-5.765,5.331-11.439,8.641-11.678,8.778    C24.346,46.956,24.173,47.001,24,47.001z M12.113,5.287C7.242,5.287,2,8.886,2,16.787C2,30.65,20.674,42.783,24,44.833    c3.323-2.051,22-14.193,22-28.046c0-7.901-5.242-11.5-10.113-11.5c-4.473,0-9.58,3.062-10.905,9.903C24.891,15.66,24.479,16,24,16    s-0.891-0.34-0.982-0.81C21.693,8.35,16.586,5.287,12.113,5.287z"
          />
        </g>
      </g>
    </svg>
  )
}

export default FavoritesIcon
