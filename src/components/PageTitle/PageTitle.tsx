import styles from "../../scss/modules/PageTitle.module.scss"

type Props = {
  headline: string
  intro?: string
}

const PageTitle = ({ headline, intro }: Props) => {
  return (
    <div className={styles.page_title}>
      <h1>{headline}</h1>
      {intro && <p>{intro}</p>}
    </div>
  )
}

export default PageTitle
