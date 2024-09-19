"use client"

import React, { useRef } from 'react'
import { PaperclipIcon } from 'lucide-react'
import { uploadToS3 } from '@/lib/s3'

const FileUpload = () => {
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                alert("File size is too large. Please upload a file smaller than 10MB")
                return
            }
            if (file.type !== 'application/pdf') {
                alert("Only PDF files are allowed")
                return
            }
            try {
                const data = await uploadToS3(file)
                console.log(data)
            } catch (error) {
                console.error("Error uploading file:", error)
            }
        }
    }

    return (
        <div onClick={handleClick}>
            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                style={{ display: 'none' }} 
                accept=".pdf"
            />
            <PaperclipIcon className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
    )
}

export default FileUpload