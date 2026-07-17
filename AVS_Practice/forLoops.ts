// print 
for (let i = 1; i<=10; i++)
{       
    if ( i % 2 == 0)
    { 
        console.log(i)
        if (i ==  6)
        {
            break
        }

    }
}

for (let i = 1; i<=10; i++)
{       

    console.log(i)
    if (i == 5)
    {
        break
    }
}


for (let j = 1; j<=10; j++)
{       

        if (j == 5)
    {
        continue
    }
    console.log(j)
}