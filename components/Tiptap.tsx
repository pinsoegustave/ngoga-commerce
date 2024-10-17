'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Toolbar } from './Toolbar'
import Heading from "@tiptap/extension-heading"

export default function Tiptap({
    description,
    onChange,
}: {
    description: string
    onChange: any
}) {
    const editor = useEditor({
        extensions: [StarterKit.configure()],
        content: description,
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: 
                    "rounded-md border min-h-[150px] border-input bg-background ring-offest-2 disabled:cursor-not-allowed disabled:opacity-50"
                },
            },
        onUpdate({ editor }) {
            onChange(editor.getHTML())
            // console.log(editor.getHTML())
        },
    })

    return (
        <div className='flex flex-col justify-stretch gap-2 min-h-[250px]'>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}