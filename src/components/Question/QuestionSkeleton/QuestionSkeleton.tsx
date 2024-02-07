import React from "react"
import ContentLoader from "react-content-loader"

const QuestionSkeleton = () => (
  <ContentLoader
    speed={2}
    width={1000}
    height={45}
    viewBox="0 0 1000 45"
    backgroundColor="#bdbdbd"
    foregroundColor="#ecebeb"
  >
    <rect x="382" y="560" rx="10" ry="10" width="95" height="30" />
    <rect x="299" y="497" rx="0" ry="0" width="30" height="3" />
    <rect x="280" y="497" rx="0" ry="0" width="19" height="1" />
    <rect x="2" y="1" rx="0" ry="0" width="1000" height="38" />
  </ContentLoader>
)

export default QuestionSkeleton
