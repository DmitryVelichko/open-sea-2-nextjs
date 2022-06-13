import {useAddress, useMetamask} from '@thirdweb-dev/react'

const style = {
  wrapper: `flex h-screen items-center justify-center`,
}

export default function Home() {

  const connectWithMetamask = useMetamask()
  const address = useAddress()

  console.log(address)

  const Auth = () => {
    return (
      <div className={style.wrapper}>
      <button onClick={connectWithMetamask}>Connect Metamask</button>
    </div>
    )
  }

  return (
    <>{address ? <div>LOGGED IN</div> : Auth()}</>
  )
}
