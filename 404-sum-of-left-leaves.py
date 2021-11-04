# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        if root == None: return 0
        
        self.sum = 0
        
        def dfs(root, isLeft):
            if isLeft and root.left == None and root.right == None:
                self.sum += root.val
                return
            if root.left != None: dfs(root.left, True)
            if root.right != None: dfs(root.right, False)
                
        dfs(root, False)
        
        return self.sum
