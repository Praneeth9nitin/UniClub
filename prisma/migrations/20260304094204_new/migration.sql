-- CreateTable
CREATE TABLE "_StudentFollows" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_StudentFollows_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_StudentFollows_B_index" ON "_StudentFollows"("B");

-- AddForeignKey
ALTER TABLE "_StudentFollows" ADD CONSTRAINT "_StudentFollows_A_fkey" FOREIGN KEY ("A") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentFollows" ADD CONSTRAINT "_StudentFollows_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
