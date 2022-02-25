import Link from 'next/link'

interface FooterProps {
    copyRight: string;
}

const Footer: React.FC<FooterProps> = ({ copyRight }) => {
  return (
    <div>
        <div>
            <h3>
                Copyright (C) {copyRight}
            </h3>
        </div>
    </div>
  )
}

export default Footer
