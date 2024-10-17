"use client"
import { type Editor } from "@tiptap/react"
import { Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Heading3, Heading1, AlignCenter, AlignRight, AlignLeft } from "lucide-react"
import { Toggle } from "./ui/toggle"


type Props = {
    editor: Editor | null
}

export function Toolbar({ editor }: Props) {
    if(!editor) {
        return null
    }
    
    return(
        <div className="border border-input bg-transparent rounded-br">
            <Toggle 
                size="sm"
                pressed={editor.isActive("heading")}
                onPressedChange={() => 
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                >
                    <Heading1 className="h-4 w-4" />
            </Toggle>
            <Toggle 
                size="sm"
                pressed={editor.isActive("heading")}
                onPressedChange={() => 
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                >
                    <Heading2 className="h-4 w-4" />
            </Toggle>
            <Toggle 
                size="sm"
                pressed={editor.isActive("heading")}
                onPressedChange={() => 
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                >
                    <Heading3 className="h-4 w-4" />
            </Toggle>
            <Toggle 
                size="sm"
                pressed={editor.isActive("bold")}
                onPressedChange={() => 
                    editor.chain().focus().toggleBold().run()
                }
                >
                    <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle 
                size="sm"
                pressed={editor.isActive("italic")}
                onPressedChange={() => 
                    editor.chain().focus().toggleItalic().run()
                }
                >
                    <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle 
                size="sm"
                pressed={editor.isActive("strike")}
                onPressedChange={() => 
                    editor.chain().focus().toggleStrike().run()
                }
                >
                    <Strikethrough className="h-4 w-4" />
            </Toggle>
            <Toggle 
                size="sm"
                pressed={editor.isActive("bulletList")}
                onPressedChange={() => 
                    editor.chain().focus().toggleBulletList().run()
                }
                >
                    <List className="h-4 w-4" />
            </Toggle>
            <Toggle 
                size="sm"
                pressed={editor.isActive("heading")}
                onPressedChange={() => 
                    editor.chain().focus().toggleOrderedList().run()
                }
                >
                    <ListOrdered className="h-4 w-4" />
            </Toggle>
            <Toggle 
                size="sm"
                pressed={editor.isActive({textAlign: 'left'})}
                onPressedChange={() => 
                    editor.chain().focus().setTextAlign("left").run()
                }
                >
                <AlignLeft className="h-4 w-4" />
            </Toggle>
            <Toggle 
                size="sm"
                pressed={editor.isActive({textAlign: 'center'})}
                onPressedChange={() => 
                    editor.chain().focus().setTextAlign("center").run()
                }
                >
                <AlignCenter className="h-4 w-4" />
            </Toggle>
            <Toggle 
                size="sm"
                pressed={editor.isActive({textAlign: 'right'})}
                onPressedChange={() => 
                    editor.chain().focus().setTextAlign("right").run()
                }
                >
                <AlignRight className="h-4 w-4" />
            </Toggle>
        </div>
    )
}