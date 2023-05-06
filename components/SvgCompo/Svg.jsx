import Image from 'next/image'


export let  Svg = (props,alt,w,h) => {
    console.log(props)
  return (
    <div>
    <Image 
    src={props} 
    alt={alt}
    width={w}
    height={h} />
  </div>
  )
}
