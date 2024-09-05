"use client"

import React from 'react'
import { useDropzone } from 'react-dropzone'
import { PaperclipIcon } from 'lucide-react'

import { uploadToS3 } from '@/lib/s3'

const FileUpload = () => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            "application/pdf": [".pdf"]
        },
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
            console.log(acceptedFiles)
            const file = acceptedFiles[0]
            if (file.size > 10 * 1024 * 1024) {
                alert("File size is too large. Please upload a file smaller than 10MB")
                return
            }
            try {
                const data = await uploadToS3 (file)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
    })
  return (
    <div {...getRootProps()}>
        <input {...getRootProps()} />
        <PaperclipIcon className="w-5 h-5 text-gray-400 hover:text-gray-600" />
    </div>
  )
}

export default FileUpload