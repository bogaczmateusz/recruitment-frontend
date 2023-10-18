import styles from "../../scss/modules/PageTitle.module.scss"

type Props = {
  headline: string
  intro?: React.ReactNode
}

const PageTitle = ({ headline, intro }: Props) => {
  return (
    <div className={styles.page_title}>
      <h1 className={styles.page_title_headline}>
        <a href="/">{headline}</a>
      </h1>
      {intro && <p className={styles.page_title_subline}>{intro}</p>}
    </div>
  )
}

export default PageTitle
