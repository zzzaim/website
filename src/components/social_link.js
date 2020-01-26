import React from 'react'
import Icon from '@mdi/react'
import { mdiTwitter, mdiGithubFace, mdiMedium } from '@mdi/js'

const socials = {
  twitter: {
    url: handle => `https://twitter.com/${handle}`,
    icon: mdiTwitter,
  },
  github: { 
    url: handle => `https://github.com/${handle}`,
    icon: mdiGithubFace,
  },
  medium: {
    url: handle => `https://medium.com/@${handle}`,
    icon: mdiMedium,
  }
}

export default ({ site, handle }) => (
  <a href={socials[site].url(handle)}>
    <span className="icon is-medium">
      <Icon path={socials[site].icon} size={1} />
    </span>
  </a>
)
