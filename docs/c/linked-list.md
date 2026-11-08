---
title: C Linked List
sidebar_position: 22.5
---

# C Linked List

A linked list is a chain of nodes. Each node holds a value and a pointer to the next node.

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int value;
    struct Node *next;
};

struct Node *addFront(struct Node *head, int v) {
    struct Node *n = malloc(sizeof(struct Node));
    n->value = v;
    n->next = head;
    return n;
}

void printList(struct Node *head) {
    for (struct Node *p = head; p != NULL; p = p->next) {
        printf("%d ", p->value);
    }
    printf("\n");
}

int main() {
    struct Node *head = NULL;
    head = addFront(head, 3);
    head = addFront(head, 2);
    head = addFront(head, 1);
    printList(head);          // 1 2 3

    while (head) {            // free the memory
        struct Node *t = head;
        head = head->next;
        free(t);
    }
    return 0;
}
```
