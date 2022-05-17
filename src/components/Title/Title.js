import s from './Title.module.scss'
export default function Title({ text }) {
    return (
        <h2 className={s.header}>{text}</h2>
    )
}