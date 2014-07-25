---
layout: post
title: Excel Tables to Markdown Table Routine
date: 2014-07-23 19:59:43

published: true
layout: post
category: general
comments: true
share: true

image:
  feature: 
  credit: 
  creditlink: 

tags: [markdown, code, general]
---

**Update**: The same day that I wrote this blog post I also discovered [Markdown Table Generator](http://www.tablesgenerator.com/markdown_tables). They allow import of CVS files as well as direct copy and paste tables which then get coverted to Markdown tables. That's a lot faster. **My routine below no longer works**. 

--------

I compose my blog and emails and even Evernote with Markdown, I typically use [Markdown Here](http://markdown-here.com/) for quick and easy converts. However, sometimes I needed a table to be sent via emails to other folks. Typing up a markdown table is a real pain, so I just create a function in excel to do the routine for me. 



## A Custom Function

To get the table below, we define a custom function:

```
Function ColumnToText(rng As Range, Optional sep As String = ",") As String
    Dim rngCell As Range
    Dim strResult As String
    For Each rngCell In rng
        If rngCell.Value <> "" Then
            strResult = strResult & sep & Trim(rngCell.Text)
        End If
    Next rngCell
    If strResult <> "" Then
        strResult = Mid(strResult, Len(sep) + 1)
    End If
    ColumnToText = strResult
End Function
```

[Source][1]

The function takes in the **range** and the optional choice is the type of separator. The default separator is comma (`'`). In order to pipe (`|`) as our separator, we need to use:

```
= ColumnToText(A1:F1,"|")
```

For the header separator such as this `-|-|-|-|-|-`, we can do it with a quick fix:

```
=REPT("-|",COUNTA(A1:F1)-1)&"-"
```

The function just counts the number Of course this does not define alignment. I usually don't care much for alignment anyway. Then just paste the resulting header separator right underneath your header line. 

And we have the combined values:

```
PSV Tag|Size|Capacity|New Capacity|Restrict %|Area (sqin)
-|-|-|-|-|-
29.2-93-0004|8T10|210,079|174,219|83%|24
29.2-93-0005|8T11|210,079|166,960|79%|23
29.2-93-0006|8T12|210,079|130,664|62%|17
```

The resulting table is: 

PSV Tag|Size|Capacity|New Capacity|Restrict %|Area (sqin)
-|-|-|-|-|-
29.2-93-0004|8T10|210,079|174,219|83%|24
29.2-93-0005|8T11|210,079|166,960|79%|23
29.2-93-0006|8T12|210,079|130,664|62%|17



[1]: http://answers.microsoft.com/en-us/office/forum/office_2013_release-excel/concatenate-cell-range-separate-with-comma-except/e69a044a-e279-4ee1-be0c-ea4a2300d33c
