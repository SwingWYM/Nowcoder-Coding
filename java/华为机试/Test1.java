//输入一个int型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。
package huawei;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Test1 {
	public static void main(String[] args){
		Scanner in = new Scanner(System.in);
		while(in.hasNext()){
			String str = in.nextLine();
			List<String> result = new ArrayList<String>();
			for(int i = str.length()-1;i >= 0;i--){
				if(!result.contains(str.substring(i,i+1))){
					result.add(str.substring(i,i+1));
				}
			}
			for(int j = 0;j<result.size();j++){
				System.out.print(result.get(j));
			}
		}
	}
}

//
//import java.util.Scanner;
//public class Main {
//    public static void main(String[] args) {
//        @SuppressWarnings("resource")
//        Scanner scanner=new Scanner(System.in);
//        while(scanner.hasNext()){
//            String s=scanner.nextLine();
//            int len=s.length();
//            int []arr1=new int[10];
//            for(int i=len-1;i>=0;i--){
//                if(arr1[s.charAt(i)-48]==0){
//                    System.out.print(s.charAt(i)-48);
//                    arr1[s.charAt(i)-48]++;
//                }
//            }
//        }
//    }
//     
// 
//     
// 
//}


