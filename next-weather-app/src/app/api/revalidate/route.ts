import { revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export function POST(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get('tag')
  if (!tag) throw new Error('태그는 필수 값입니다')

  revalidateTag(tag)
  return NextResponse.json({ message: '재검증에 성공했습니다', tag })
}