import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Link from '../Link'
import { linksData } from '../linksData'

describe('test links hrefs', () => {
  test('email link has correct href', () => {
    render(<Link color={'red'} {...linksData[0]}/>)
    const githubLink = screen.getByTestId(linksData[0].url)
    expect(githubLink).toHaveAttribute('href', 'mailto:aledeloss@gmail.com')
  })

  test('github links has correct href', () => {
    render(<Link color={'red'} {...linksData[1]}/>)
    const githubLink = screen.getByTestId(linksData[1].url)
    expect(githubLink).toHaveAttribute('href', 'https://github.com/aledeloss')
  })

  test('linkedin link has correct href', () => {
    render(<Link color={'red'} {...linksData[2]}/>)
    const githubLink = screen.getByTestId(linksData[2].url)
    expect(githubLink).toHaveAttribute('href', 'https://www.linkedin.com/in/aledeloss/')
  })
})
