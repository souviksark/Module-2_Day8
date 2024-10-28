import React from 'react'
import Image from 'next/image'

function contact() {
  return (
    <div>
        <h1>This is our contact Page</h1>
        <Image
        src='https://th.bing.com/th/id/R.05ce56076bf22097891676cc96234789?rik=j6pNXdVOXS8zjw&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1541737923-4dc81f2d1d41%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=LJHwQH9%2bFjVjVp6JfVVYjAGwytg%2ffc7PIb%2bD5RVgnrg%3d&risl=&pid=ImgRaw&r=0'
        width={50}
        height={50}
        alt='normal text'
        />
    </div>
  )
}

export default contact