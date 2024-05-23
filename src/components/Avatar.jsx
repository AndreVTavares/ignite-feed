import styles from "./Avatar.module.css"

export function Avatar({ imageUrl, hasBorder = true }) {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.avatarNoBorder}
      src={imageUrl}
    />
  )
}
