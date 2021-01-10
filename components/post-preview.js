import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  const coverImageComp = (
    coverImage &&
    <CoverImage
      slug={slug}
      title={title}
      src={coverImage}
      height={278}
      width={556}
    />
  )
  return (
    <div>
      <div className="mb-5">
        {coverImageComp}
      </div>
      <h3 className="text-3xl font-bold mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>

    </div>
  )
}
