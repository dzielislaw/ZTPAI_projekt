<?php

namespace App\Controller;

use App\Entity\ToolInstance;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ToolInstanceController extends AbstractController
{
    #[Route('/api/toolInstance/{id}', name: 'app_tool_instance', methods: 'GET')]
    public function getToolInstanceById(EntityManagerInterface $entityManager, $id): Response
    {
        $toolInstance = $entityManager->getRepository(ToolInstance::class)->find($id);
        return $this->json(
            $toolInstance,
            headers: ['Content-Type:' => 'application/json;charset=UTF-8']
        );
    }
}
