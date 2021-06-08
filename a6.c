#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
    char ***dictionary;
    int noWords;
    int maxWordLen;
    int i;
    scanf("%d",&noWords);
    scanf("%d",&maxWordLen);
    dictionary = malloc(noWords*sizeof(char**));
    printf("Please enter the definition of this word\n");
    for(i = 0; i < noWords; ++i){
        char buff[80];
        char **keyValue;

        //find function
    }

    //release
    free(dictionary);
    return 0;
}