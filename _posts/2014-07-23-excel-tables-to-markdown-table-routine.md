---
layout: post
title: Excel Tables to Markdown Table Routine
date: 2014-07-23 19:59:43

published: false
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

| sdfsdf | sdfsdfsdf | sdfsdf | sdfsdf | sdfsdf |
|--------|-----------|--------|--------|--------|
| sdfsdf | sdfsdf    | sdfsdf | sdfsdf | sdfsdf |
| sdfsdf | sdfsdf    | sdfsdf | sdfsdf | sdfsdf |
| sdfsdf | sdfsdf    | sdfsdf |        | sdfsdf |


|Tables        | Are           | Cool  |
|------------- |-------------| -----|
|col 3 is      | right-aligned | $1600 |
|col 2 is      | centered   |   $12 |
|zebra stripes | are neat   |    $1 |

[1]: http://answers.microsoft.com/en-us/office/forum/office_2013_release-excel/concatenate-cell-range-separate-with-comma-except/e69a044a-e279-4ee1-be0c-ea4a2300d33c
