import axios from "axios";

export default function Avatars({ avatars }) {
    return (
        <div>
            <h1>Avatars</h1>
            <p>All of the Avatars that appered in the show:</p>
            <ul style={{ display: 'grid', 'grid-template-columns': '1fr 1fr 1fr', 'grid-gap': '4em' }}>
                {avatars.map(avatar => {
                    return (
                        <li key={avatar.id}>
                            <p>{avatar.title}</p>
                            <img src={avatar.url} width="100%" alt="" />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export async function getStaticProps() {
    const avatars = await axios.get('https://jsonplaceholder.typicode.com/photos').then(res => res.data);
    return {
        props: {
            avatars
        }
    }
}

// export async function getStaticProps() {
//     const avatars = await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json());
//     return {
//         props: {
//             avatars
//         }
//     }
// }